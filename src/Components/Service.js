import React from 'react';

const Service = () => {
  return (
    <section className="serviços section" id="serviços">
      <h2 className="section__title serviços_title">Serviços</h2>

      <div className="serviços__container container">
        {/* SERVIÇOS 1 */}
        <div className="serviços__card">
          <div className="serviços__data">
            <h2 className="serviços__title">Cadastro Operacionais</h2>
            <ul>
              <li><a href="https://rsvp.fourtc.com.br/dashboard/cadastros/empresa">Empresas</a></li>
              <li><a href="https://rsvp.fourtc.com.br/dashboard/cadastros/clientes">Clientes</a></li>
              <li><a href="https://rsvp.fourtc.com.br/dashboard/cadastros/fornecedores">Fornecedores</a></li>
              <li><a href="https://rsvp.fourtc.com.br/dashboard/cadastros/servicos">Serviços</a></li>
              <li><a href="https://rsvp.fourtc.com.br/dashboard/cadastros/novoevento">Tipo Evento</a></li>
              <li><a href="https://rsvp.fourtc.com.br/dashboard/cadastros/cadastro">Usuários</a></li>
            </ul>
          </div>
        </div>

        {/* SERVIÇOS 2 */}
        <div className="serviços__card">
          <div className="serviços__data">
            <h2 className="serviços__title">Cadastro Eventos</h2>
            <ul>
              <li><a href="https://rsvp.fourtc.com.br/dashboard/eventos">Evento</a></li>
              <li><a href="https://rsvp.fourtc.com.br/dashboard/eventos/participantes">Participantes</a></li>
              <li><a href="https://rsvp.fourtc.com.br/dashboard/eventos/cartaconvite">Carta Convite</a></li>
              <li><a href="https://rsvp.fourtc.com.br/dashboard/eventos/dadoscadastrais">Dados Cadastrais</a></li>
              <li><a href="https://rsvp.fourtc.com.br/dashboard/eventos/questionario">Questionário</a></li>
            </ul>
          </div>
        </div>

        {/* SERVIÇOS 3 */}
        <div className="serviços__card">
          <div className="serviços__data">
            <h2 className="serviços__title">Gestão</h2>
            <ul>
              <li><a href="https://rsvp.fourtc.com.br/dashboard/gestao/participante">Participante</a></li>
              <li><a href="https://rsvp.fourtc.com.br/dashboard/gestao/usuario">Usuários</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
