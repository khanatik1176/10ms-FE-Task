import { BackendUrl } from "@/utils/config";
import axios from "axios";

export const fetchAllData = async (lang: string) => {
  const response = await axios.get(
    `${BackendUrl}/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
    {
      headers: {
        'X-TENMS-SOURCE-PLATFORM': 'web',
        'accept': 'application/json',
      },
    }
  );
  return response.data;
};