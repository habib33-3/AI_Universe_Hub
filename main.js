const loadTool = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/ai/tool/01"
  );
  const data = await res.json();
  console.log(data.data);
};

loadTool();
