import { Component, For } from 'solid-js';
import Project from './Project';
import tinykeys from 'tinykeys';
import { validateEvent } from './utils';

export type Props = {
  projects: Array<string>;
};

const Projects: Component<Props> = (props) => {
  tinykeys(window, {
    l: validateEvent(() => 'adding project'),
  });

  return (
    <div class="w-1/5 h-screen p-4 flex overflow-y-scroll">
      <div class="my-auto">
        <For each={props.projects}>
          {(project) => (
            <Project
              projectName={project}
              setName={(name) => console.log(name)}
            />
          )}
        </For>
      </div>
    </div>
  );
};

export default Projects;
