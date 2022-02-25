# GatitoBook

Aplicação para estudo de Angular. Módulo de controle de fluxo de navegação. Tem como premissa uma rede social para amantes de gatos.


## GatitoBook _API_

A _API_ utilizada no projeto pode ser encontrada no seguinte link:
https://github.com/alura-cursos/angular_formularios/archive/main.zip

Após descompactar a pasta, entre pela sua linha de comando na pasta _'api'_, use o comando _npm i_, para instalar as dependências do back-end, e execute-o com o comando _npm start_.

## 01. Cartão de animais

Desenvolvimento do módulo e do componente _card_ e do componente de _pet_.
Visão geral sobre:

- Criação de componente reutilizável para apresentar um animal.
- Função da diretiva _ng-content_.
- Criação de serviço de consulta de lista de animais do usuário logado.
- Configuração de _header_ de requisição, para o transporte do _token_ de autenticação, utlizando o objeto _HttpReades_.
- Utilização dos arquivos _enviroments/*.ts_ para cetralizar informações sobre comunicação com a _API_.

## 02. Lista de animais

Desenvolvimento do componente _photo-grid_ e das guardas de rota _authentication_ e _login_.
Visão geral sobre:

- Criação de páginas com componentes reutilizáveis.
- Utilização do operador _switchMap_ para concatenar dois fluxos de informação.
- Utilização da guarda de rota _authentication_ para impedir o acesso a páginas que exigem autenticação.
- Utilização da guarda de rota _login_ para impedir o acesso a página de login se o usuário já estiver logado.
