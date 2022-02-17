# GatitoBook

Aplicação para estudo de Angular. Módulo de boas práticas em arquitetura e formulários. Tem como premissa uma rede social para amantes de gatos.


## GatitoBook _API_

A _API_ utilizada no projeto pode ser encontrada no seguinte link:
https://github.com/alura-cursos/angular_formularios/archive/main.zip

Após descompactar a pasta, entre pela sua linha de comando na pasta _'api'_, use o comando _npm i_, para instalar as dependências do back-end, e execute-o com o comando _npm start_.

## 01. Home

Desenvolvimento do módulo e do componente _home_ e do componente de _login_.
Visão geral sobre:

- Configuração de estilo do _Bootstrap_ como nosso _framework_ de _CSS_ global.
- Configuração de estilo do _Font Awesome_.
- Carregamento de módulos sob demanda (_lazy loading_).
- Roteamento de módulos de funcionalidade (_feature modules_) e seus componentes.

## 02. Login

Desenvolvimento do serviço _authentication_, do componente _message_ e de seus respectivos módulos.
Visão geral sobre:

- _Template Driven Form_ para desenvolver o formulário de autenticação do compoente de _login_.
- Configuração dos campos com _ngModel_.
- Configuração do formulário com _ngForm_.
- Comportamento _submit_ do formulário.
- Informe de campos inválido utilizando componente genérico de mensagem.
- Comunicação com a _API_ de _backend_ para autenticação na aplicação.
- Tratamento de erro no retorno da comunicação com a _API_.
- Redirecionamento de rota no sucesso do retorno da comunicação com a _API_.

## 03. Cadastro de usuário

Desenvolvimento do componente _new-user_ no módulo _home_ para o registro de novos usuários.
Visão geral sobre:

- _Reactive Form_ para desenvolver o formulário de registro de novo usuário.
- Configuração dos campos com _formControlName_.
- Configuração do formulário com _formGroup_.
- Criação do formulário de modelo, criado no componente através do serviço _FormBuilder_.
- Criação de _service_ vinculada ao componente de registro de usuário para consumo da _API_.
- Interface para representar o modelo de dados de um novo usuário.

## 04. Validação de formulário assíncrono

Implementações de validação sobre o formulário de registro de novo usuário.
Visão geral sobre:

- Utilização das validações padrões fornecidas pelo _Angular_, como _required_ e _minLength_.
- Utilização de validações estáticas de um campo específico, como a _lowercase_, criada para o campo _userName_.
- Utilização de validações para vários campos do formulário, como a _equalsUserNamePassword_, cirada para validar se os campos _userName_ e _password_ são iguais.
- Utilização de validações assíncronas, como a criada para checar se já existe um usuário criado com o nome informado.
- Conclusão do registro de um novo usuário e redirecionamento para a tela de login em caso de sucesso.

## 05. Autenticação

Implementações sobre manipulação do token _JWT_ retornado pela auntenticação na _API_.
Visão geral sobre:

- Manipulação do _localStorage_ para armazenar o _token_.
- Alteração no serviço de autenticação para ler o _token_ retornado no cabeçalho da requisição de autenticação.
- Serviço de usuário para cuidar dos processos de login e logout.
- Criação de cabeçalho.
- Criação de rodapé.
