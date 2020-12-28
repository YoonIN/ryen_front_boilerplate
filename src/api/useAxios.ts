import axios from "axios";

const APIPORT = process.env.REACT_APP_SERVER;

export default function useAxios() {
  // GET API
  const _get = (url: string, params?: any): Promise<any> => {
    return axios({
      url: `${APIPORT}/${url}/`,
      method: "GET",
      params,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        return response;
      })
      .catch(async function (error) {
        console.error("_get :: ", error);
        throw error;
      });
  };

  // POST API
  const _post = (url: string, data: any): Promise<any> => {
    return axios({
      url: `${APIPORT}/${url}/`,
      method: "POST",
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log("response :: ", response);
        return response;
      })
      .catch(async function (error) {
        console.error("_post :: ", error);
        throw error;
      });
  };

  // PUT API
  const _put = (url: string, data?: any): Promise<any> => {
    return axios({
      url: `${APIPORT}/${url}/`,
      method: "PUT",
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        return response;
      })
      .catch(async function (error) {
        if (error.response.status === 401) {
          alert("토큰이 만료되었습니다. 다시 로그인해주세요");
        }
        console.error("_put :: ", error);
        throw error;
      });
  };

  // PATCH API
  const _patch = (url: string, data: any): Promise<any> => {
    return axios({
      url: `${APIPORT}/${url}/`,
      method: "PATCH",
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        return response;
      })
      .catch(async function (error) {
        if (error.response.status === 401) {
          alert("토큰이 만료되었습니다. 다시 로그인해주세요");
        }
        console.error("_patch :: ", error);
        throw error;
      });
  };

  // DELETE API
  const _delete = (url: string, data?: any): Promise<any> => {
    return axios({
      url: `${APIPORT}/${url}/`,
      method: "DELETE",
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        return response;
      })
      .catch(async function (error) {
        if (error.response.status === 401) {
          alert("토큰이 만료되었습니다. 다시 로그인해주세요");
        }
        console.error("_delete :: ", error);
        throw error;
      });
  };

  // File Upload API
  const _fileUpload = (url: string, data: any): Promise<any> => {
    return axios({
      url: `${APIPORT}/${url}/`,
      method: "POST",
      data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(function (response) {
        return response;
      })
      .catch(async function (error) {
        console.error("_fileUpload :: ", error);
        throw error;
      });
  };

  const _getDownloadExcel = (
    url: string,
    fileName: string,
    params?: any
  ): Promise<any> => {
    return axios({
      url: `${process.env.REACT_APP_SERVER}/${url}/`,
      method: "GET",
      params,
      responseType: "blob",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        const url = window.URL.createObjectURL(
          new Blob([response.data], { type: response.headers["content-type"] })
        );
        const link = document.createElement("a");
        link.href = url;
        link.download = `${fileName}.xlsx`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(async function (error) {
        console.error("_get :: ", error);
        throw error;
      });
  };
  const _postDownloadExcel = (
    url: string,
    fileName: string,
    data?: any
  ): Promise<any> => {
    return axios({
      url: `${process.env.REACT_APP_SERVER}/${url}/`,
      method: "POST",
      data: JSON.stringify(data),
      responseType: "blob",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        const url = window.URL.createObjectURL(
          new Blob([response.data], { type: response.headers["content-type"] })
        );
        const link = document.createElement("a");
        link.href = url;
        link.download = `${fileName}.xlsx`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(async function (error) {
        console.error("_get :: ", error);
        throw error;
      });
  };

  return {
    _get,
    _post,
    _put,
    _patch,
    _delete,
    _fileUpload,
    _getDownloadExcel,
    _postDownloadExcel,
  };
}
