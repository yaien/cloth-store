import axios from "./axios";

export default {
  async add(guestId: string, item: API.CartItem): Promise<API.Cart> {
    let url = `/api/v1/public/guest/${guestId}/items`;
    let res = await axios.post(url, item);
    return res.data;
  },
  async remove(guestId: string, itemId: string): Promise<API.Cart> {
    let url = `/api/vi/public/guest/${guestId}/items/${itemId}`;
    let res = await axios.delete(url);
    return res.data;
  }
};
