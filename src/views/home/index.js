import Nav from '../../components/nav';
import Footer from '../../components/footer';
import imagemQ from '../../img/logo.jpeg'

let Home = {
  render: async () => {
    let view = `
      ${Nav}
      <div>
        <h1>Home page</h1>

        <div class="card">
        <p class="title">este é meu card</p>
        <img class="image" src="${imagemQ}" alt="">
        <button class="button _sucess">Clique Aqui</button>
        </div>
      </div>
      ${Footer}
    `
    return view
  },
  after_render: async () => {}
};

export default Home;