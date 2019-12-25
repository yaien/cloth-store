import axios from "./axios";

export default {
  async get(id: string): Promise<API.Guest> {
    const res = await axios.get("/api/v1/public/guests/" + id);
    return res.data;
  },

  async create(): Promise<API.Guest> {
    const res = await axios.post("/api/v1/public/guests");
    return res.data;
  }
};
