import {
  localData,
  cookieData
} from "../util/local";
import axios from "../util/axios";


export function AllOrder() {
  return new Promise((resolve, reject) => {
    axios
      .get("/api/AllOrder")
      .then(res => {
        if (res.code == 200) {
          resolve(res);
        } else {
          reject(res);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

// 修改球场
export function setOrder(param) {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/setOrder", param)
      .then(res => {
        if (res.code == 200) {
          resolve(res);
        } else {
          reject(res);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function OrderByDate(param) {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/OrderByDate", param)
      .then(res => {
        if (res.code == 200) {
          resolve(res);
        } else {
          reject(res);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function OrderById(param) {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/getOrder", param)
      .then(res => {
        if (res.code == 200) {
          resolve(res);
        } else {
          reject(res);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function newOrder(param) {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/newOrder", param)
      .then(res => {
        if (res.code == 200) {
          resolve(res);
        } else {
          reject(res);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}
