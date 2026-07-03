type Route = {
  ownerSlug: string;
  repoSlug: string;
  routeSlug: string;
  sourceSkillPath: string;
}

export type Skill = {
  id: string;
  name: string;
  author: string;
  authorAvatar: string;
  description: string;
  githubUrl: string;
  branch: string;
  path: string;
  forks: number;
  stars: number;
  updatedAt: string;
  route: Route;
}