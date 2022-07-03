export type Quest = {
  id: string;
  name: string;
  modified_at: Date;
  complete?: boolean;
};

export type Project = {
  id: string;
  name: string;
  version: number;
  created_at: Date;
  quests: Array<Quest>;
};
