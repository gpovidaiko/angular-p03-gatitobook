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

## 03. Detalhe do animal

Desenvolvimento do componente _pet-detail_ e do _interceptor_ de autenticação.
Visão geral sobre:

- Passagem de parâmentros de rota e leitura desses parâmetros através do serviço _ActivatedRoute_.
- Como centralizar a configuração do _token_ nos cabeçalhos das requisições através do serviço de tipo _interceptor_.
- Criação de método de exclusão de uma foto.
- Criação do método de 'curtir' de uma foto.
- Utilização do operador _mapTo_ para retornar um valor específico ao sucesso de uma operação.
- Utilização do operador _catchError_ para tratamentos de retornos inesperados de uma operação.

## 04. Comentários

Desenvolvimento do componente _comments_ e do _resolver_ de lista de animais para o componente _list-pets_.
Visão geral sobre:

- Criação de método de consulta de comentários.
- Criação de método de adição de comentários.
- Como resetar um formulário após uma operação.
- Utilização do operador _tap_ para execuções após uma requisição.
- Utilização de um serviço de tipo _resolver_ para carregar a lista de animais antes de renderizar o componente _list-pets_.
- Refatoração do componente _list-pets_ para obter a lista de animais fonecida pelo _resolver_.

## 05. Novo animal

Desenvolvimento do componente _menu_ e do _new-pet_.
Visão geral sobre:

- CSS específico de um componente.
- Upload de arquivos.
- Monitoramento de progresso de uma requisição de upload, através das configurações de _options_ de um método _post_ do serviço _HttpClient_.
