export const handleKeyAndValue = (item) => {
  return [
    { name: "Budget", value: "$ " + item.budget.toLocaleString() },
    { name: "Revenue", value: "$ " + item.revenue.toLocaleString() },
    { name: "Release Date", value: item.release_date },
    { name: "Run time", value: item.runtime + "분" },
  ];
};
