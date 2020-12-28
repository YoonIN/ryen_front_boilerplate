// apis
import useAxios from "../useAxios";
import { Sample } from "./type";

export default function useSampleAPI() {
  const { _get } = useAxios();

  // Get Top Banner
  async function getSample(): Promise<Sample[]> {
    try {
      const res = await _get("/sample");
      console.log("success", "getSample", res.data.result);
      return res.data.result;
    } catch (error) {
      console.log("error", "getSample", error);
      throw error;
    }
  }

  return {
    getSample,
  };
}
