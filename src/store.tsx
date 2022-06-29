import { createContext, createEffect, useContext } from 'solid-js';
import { createStore, produce } from 'solid-js/store';
import { Quest } from './types';
import { getNewId } from './utils';

const name = 'store';

const StoreContext = createContext({});

export function StoreProvider(props) {
  const localState = localStorage.getItem(name);

  const [state, setState] = createStore(
    localState ? JSON.parse(localState) : {}
  );

  createEffect(() => localStorage.setItem(name, JSON.stringify(state)));

  const store = [
    state,
    {
      toggleView() {
        setState({ view: !state.view });
      },
      setSelectedProject(projectId: string) {
        setState({ selectedProject: projectId });
      },
      setS3Config(config: Object) {
        setState({ s3: config });
      },
      changeSelectedProject(direction: 'UP' | 'DOWN') {
        setState(
          produce((state: any) => {
            const selectedProjectIndex = state.projectList.findIndex(
              (project) => project.id === state.selectedProject
            );

            const newIndexDirection = direction === 'UP' ? -1 : 1;
            let newIndex = selectedProjectIndex;
            do {
              newIndex = newIndex + newIndexDirection;
              if (newIndex < 0) {
                newIndex = state.projectList.length - 1;
              }
              if (newIndex >= state.projectList.length) {
                newIndex = 0;
              }
            } while (state.projectList[newIndex].deleted);

            state.selectedProject = state.projectList[newIndex].id;
          })
        );
      },
      addProject(project: string) {
        const id = getNewId();

        setState({
          projectList: [
            ...(state.projectList ?? []),
            { id, created_at: Date.now(), deleted: false },
          ],
          projectMap: {
            ...state.projectMap,
            [id]: {
              name: project,
              modified_at: Date.now(),
              quests: [],
            },
          },
        });

        return id;
      },
      renameProject(projectId: string, newName: string) {
        setState(
          produce((state: any) => {
            const selectedProject = state.projectMap[projectId];

            selectedProject.name = newName;
            selectedProject.modified_at = Date.now();
          })
        );
      },
      deleteProject(projectId: string) {
        setState(
          produce((state: any) => {
            const selectedProject = state.projectList.find(
              (project) => project.id === projectId
            );

            selectedProject.deleted = true;

            delete state.projectMap[projectId];
          })
        );
      },
      addQuest(name: string) {
        if (
          !state.selectedProject ||
          !state.projectMap[state.selectedProject]
        ) {
          return;
        }

        setState(
          produce((state: any) => {
            state.projectMap[state.selectedProject].modified_at = Date.now();
            state.projectMap[state.selectedProject].quests.push({
              id: getNewId(),
              name,
              created_at: Date.now(),
            });
          })
        );
      },
      completeQuest(questId: string) {
        setState(
          produce((state: any) => {
            const allQuests = Object.values(state.projectMap).flatMap(
              (project: any) => project.quests
            );

            const quest = allQuests?.find(
              (quest: Quest) => quest.id === questId
            );

            if (quest) {
              quest.complete = true;
            }
          })
        );
      },
    },
  ];

  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  return useContext(StoreContext) as any;
}
