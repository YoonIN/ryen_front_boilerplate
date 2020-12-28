import moment from "moment";
import "moment/locale/ko";

moment.locale("ko", {
  weekdays: [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ],
  weekdaysShort: ["일", "월", "화", "수", "목", "금", "토"],
});

export default function useTools() {
  const dateFormat = (date: string | null | Date, type?: string) => {
    if (date === null) return null;
    switch (type) {
      case "date":
        return moment(date).format("YYYY-MM-DD");
      case "all":
        return moment(date).format("YYYY-MM-DD HH:mm:dd");
      default:
        return moment(date).format("YYYY-MM-DD HH:mm");
    }
  };

  const getRangeDate = (range: string) => {
    switch (range) {
      case "1d":
        return {
          start: new Date(),
          end: new Date(),
        };
      case "2d":
        return {
          start: new Date(new Date().setDate(new Date().getDate() - 1)),
          end: new Date(),
        };
      case "3d":
        return {
          start: new Date(new Date().setDate(new Date().getDate() - 3)),
          end: new Date(),
        };
      case "7d":
        return {
          start: new Date(new Date().setDate(new Date().getDate() - 7)),
          end: new Date(),
        };
      case "1m":
        return {
          start: new Date(new Date().setMonth(new Date().getMonth() - 1)),
          end: new Date(),
        };
      case "3m":
        return {
          start: new Date(new Date().setMonth(new Date().getMonth() - 3)),
          end: new Date(),
        };
      case "1y":
        return {
          start: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
          end: new Date(),
        };
      case "total":
        return {
          start: null,
          end: null,
        };
      default:
        return {
          start: null,
          end: null,
        };
    }
  };

  //3번째 숫자마다 쉼표 찍는 함수
  const numberWithCommas = (x: string | number) => {
    if (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  };

  return {
    numberWithCommas,
  };
}
