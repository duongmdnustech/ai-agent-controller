enum sortType {
  RECENT = "recent",
  STARS = "stars"
}

export type Filter = {
  filterBy: string,
  sortBy: sortType,
  search: string,
}
