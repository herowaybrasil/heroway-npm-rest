const rootElement = document.getElementById('root');

const hero = {
  id: 6,
  name: "Captain America - 2",
  company: "Marvel"
};

async function run() {
  try {
    const result = await GET(1);
    rootElement.innerText = JSON.stringify(result, null, 2);
  } catch(err) {
    console.error(err);
  }
}

run();


// GET - Buscar dados
async function GET(id = '') {
  const request = await fetch(`http://localhost:3000/heroes/${id}`);
  const json = await request.json();

  console.log('GET', json);
  return json;
}

// POST - Inserir dados
async function POST(body) {
  const headers = { 'Content-Type': 'application/json' };
  const request = await fetch('http://localhost:3000/heroes', { method: 'POST', headers, body: JSON.stringify(body) });
  const json = await request.json();

  console.log('POST', json);
  return json;
}

// PUT - Atualizar dados
async function PUT(id, body) {
  const headers = { 'Content-Type': 'application/json' };
  const request = await fetch(`http://localhost:3000/heroes/${id}`, { method: 'PUT', body: JSON.stringify(body) });
  const json = await request.json();

  console.log('PUT', json);
  return json;
}

// DELETE - Deletar dados
async function DELETE(id) {
  const request = await fetch(`http://localhost:3000/heroes/${id}`);
  const json = await request.json();

  console.log('DELETE', json);
  return json;
}
