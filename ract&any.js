// 1 sec
const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("p1 Resolved");
    }, 5000);
  });
};

// 2 sec
const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("p2 reject");
    }, 2000);
  });
};

// 3 sec
const p3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("p3 rejected");
    }, 3000);
  });
};

const loadData = async () => {
  try {
    console.time("promise");
    const allSettledRes = await Promise.any([p1(), p2(), p3()]);
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
