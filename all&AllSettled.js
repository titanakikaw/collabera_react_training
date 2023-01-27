// 1 sec
const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p1 Resolved");
    }, 1000);
  });
};

// 2 sec
const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("p2 Rejected");
    }, 2000);
  });
};

// 3 sec
const p3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p3 Resolved");
    }, 3000);
  });
};

const loadData = async () => {
  try {
    console.time("promise");
    // const allRes = await Promise.all([p1(), p2(), p3()]);
    // never go to catch
    const allSettledRes = await Promise.allSettled([p1(), p2(), p3()]);
    // console.log(allRes);
    console.log(allSettledRes);
    // const p1Res = await p1(); // 1 sec
    // console.log(p1Res);
    // const p2Res = await p2(); // 2 sec
    // console.log(p2Res);
    // const p3Res = await p3(); // 3 sec
    // console.log(p3Res);
    console.timeEnd("promise");
  } catch (error) {
    console.log(error);
  }
};

loadData();
