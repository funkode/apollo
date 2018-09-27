
const getWidgets = async () => {
  const res = await fetch('http://localhost:3020/widgets')
  const widgets = await res.json();

  return widgets;
};

getWidgets().then(widgets => console.log(widgets));

