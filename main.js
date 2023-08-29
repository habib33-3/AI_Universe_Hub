const loadTool = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
  const data = await res.json();

  const tools = data.data.tools;

  console.log(typeof tools);
  console.log(tools[1].name);
  displayTools(tools);
};

const displayTools = (tools) => {
  const toolContainer = document.getElementById("tool-container");

  tools.forEach((tool) => {
    const toolCard = document.createElement("div");

    toolCard.classList = `w-96 rounded-lg card shadow-lg border-solid bg-gray-200 `;
    toolCard.innerHTML = `
    <div  class="p-8">
    <img src="${tool.image}" alt="" />
    <div>
      <h4 class="text-2xl text-black font-semibold">Features</h4>
      <ol
        class="list-decimal text-slate-800 my-5 border-b border-solid border-gray-600"
      >
        <li>${tool.features[0]}</li>
        <li>${tool.features[1]}</li>
        <li>${tool.features[2]}</li>
      </ol>
    </div>

    <div class="flex justify-between">
      <div>
        <h2 class="text-2xl text-black font-semibold">${tool.name}</h2>
    
        <p class="text-gray-500 font-medium mt-2">${tool.published_in}</p>
      </div>

      <div>
        <a
          id="show-details"
          class="text-2xl tex-black font-semibold"
          href=""
          ><i class="fa-solid fa-arrow-right"></i
        ></a>
      </div>
    </div>
  </div>
`;
    toolContainer.appendChild(toolCard);
  });
};

loadTool();
