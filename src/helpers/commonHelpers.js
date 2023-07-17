export const calcPointsPerTx = (tx) => {
  let points = 0;
  const txAbs = Math.floor(tx);
  if (txAbs > 50) {
    points += Math.min(txAbs, 100) - 50;
  }
  if (txAbs > 100) {
    points += (txAbs - 100) * 2;
  }
  return points;
};

export const sortUsers = (data) => {
  const users = Array.from(
    new Set(data?.map((d) => d.userId)).values()
  );
  users?.sort((a, b) => a - b);
  return users;
};

export const getDataByPoints = (userId, data) => {
  const userData = data?.filter((d) => d.userId === userId);
  const monthMap = { march: 0, april: 0, may: 0 };
  const total = userData?.reduce((acc, cur) => {
    const month = new Date(cur.createdAt)
      .toLocaleString("en-US", { month: "long" })
      .toLocaleLowerCase();
    if (!monthMap[month]) {
      monthMap[month] = cur.points;
    } else {
      monthMap[month] += cur.points;
    }
    acc += cur.points;
    return acc;
  }, 0);
  return {
    id: userId,
    total,
    ...monthMap,
  };
};
