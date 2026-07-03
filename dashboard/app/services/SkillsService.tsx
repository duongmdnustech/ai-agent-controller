import axios from "axios";
import { Filter } from "../types/filter";
import { Pagination } from "../types/pagination";
import { Skill } from "../types/skill";

export async function fetchSkills(
  filter: Partial<Filter> = {}, 
  pagination: Pagination = { page: 1, limit: 10 }
): Promise<{ skills: Skill[], filters: any, pagination: any }> {
  try {
    const params = new URLSearchParams(
      Object.entries({ ...pagination, ...filter }).map(([key, value]) => [key, String(value)])
    );

    const response = await axios.get(`/api/skillmp?${params}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching skills through proxy:", error);
    throw error;
  }
}