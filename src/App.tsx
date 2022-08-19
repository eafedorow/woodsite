import React from 'react';
import './styles/index.scss'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import woodStack from './assets/img/woodStack.jpg'
import woodCheck from './assets/img/woodCheck.jpg'

function App() {
  return (
    <div className="globalContainer">
        <Header/>
        <div className="container">
            <main>
                <h1>О компании:</h1>
                <div className="info">
                    <div>
                        <h2>Собственное производство</h2>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consectetur eos error fugiat
                            in incidunt labore minima modi molestiae nulla, perferendis provident quaerat quisquam quo rem
                            sequi tempora, totam. Dolore.
                        </div>
                        <div>Ab aliquid, architecto atque, commodi cupiditate dolores doloribus dolorum esse explicabo illo
                            iste itaque magni officiis optio sapiente tenetur voluptatem. Culpa praesentium quis unde ut!
                            Accusantium ducimus omnis praesentium vel.
                        </div>
                        <div>At deleniti deserunt et eum facere impedit ipsa laborum minima pariatur porro quibusdam sunt,
                            vero! A dolores eos officia quam reiciendis repudiandae soluta! Atque dolore doloremque dolorum
                            eveniet, placeat quibusdam?
                        </div>
                        <div>Commodi consequatur dignissimos eligendi esse fugit, inventore minima nostrum reiciendis,
                            repellendus sed suscipit tempora temporibus tenetur. A asperiores dicta doloremque dolorum,
                            expedita, iure, laboriosam nostrum rem soluta voluptatem voluptates voluptatibus.
                        </div>
                        <div>Dolorum fuga fugit hic itaque minima perferendis sapiente tenetur. Accusamus autem eos ex illo
                            nesciunt nobis obcaecati perspiciatis provident, quaerat quas quod quos rerum, sapiente tempore
                            totam unde voluptatem! Dolorum.
                        </div>
                    </div>
                    <img className="image" src={woodStack} alt=""/>
                </div>
                <div className="info">
                    <img className="image" src={woodCheck} alt=""/>
                    <div>
                        <h2>Проверка качества</h2>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consectetur eos error fugiat
                            in incidunt labore minima modi molestiae nulla, perferendis provident quaerat quisquam quo rem
                            sequi tempora, totam. Dolore.
                        </div>
                        <div>Ab aliquid, architecto atque, commodi cupiditate dolores doloribus dolorum esse explicabo illo
                            iste itaque magni officiis optio sapiente tenetur voluptatem. Culpa praesentium quis unde ut!
                            Accusantium ducimus omnis praesentium vel.
                        </div>
                        <div>At deleniti deserunt et eum facere impedit ipsa laborum minima pariatur porro quibusdam sunt,
                            vero! A dolores eos officia quam reiciendis repudiandae soluta! Atque dolore doloremque dolorum
                            eveniet, placeat quibusdam?
                        </div>
                        <div>Commodi consequatur dignissimos eligendi esse fugit, inventore minima nostrum reiciendis,
                            repellendus sed suscipit tempora temporibus tenetur. A asperiores dicta doloremque dolorum,
                            expedita, iure, laboriosam nostrum rem soluta voluptatem voluptates voluptatibus.
                        </div>
                        <div>Dolorum fuga fugit hic itaque minima perferendis sapiente tenetur. Accusamus autem eos ex illo
                            nesciunt nobis obcaecati perspiciatis provident, quaerat quas quod quos rerum, sapiente tempore
                            totam unde voluptatem! Dolorum.
                        </div>
                    </div>

                </div>
            </main>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
