# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

<table>
    <thead>
        <tr> 
            <th>Caso do Teste</th>
            <th>CT-01 – Cadastro e Login no Aplicativo</th>
        </tr>
    </thead>
       <tbody>
        <tr> 
            <td>Requisitos Associados</td>
            <td>
               RF - 01 - O usuário deve conseguir fazer cadastro e login no aplicativo. 
            </td>
        </tr>
        <tr> 
            <td>Objetivos do Teste</td>
            <td>
               Permitir a inserção e visualização dos dados. O formulário de cadastro de dados deve permitir o preenchimento sem erros. 
            </td>
        </tr>
        <tr> 
            <td>Passos</td>
            <td>
            1. Acessar o site que hospeda o aplicativo; </br>
             2. Baixar o Aplicativo; </br>
            3. Instalar no smartphone; </br>
            4. Acessar as funcionalidades de cadastro de usuário</br>
            </td>
        </tr>
        <tr> 
            <td>Critérios de Êxito</td>
            <td>
            O usuário precisa conseguir visualizar as páginas e formulários com seus dados;</br>
						É necessário que as páginas sejam demonstradas com os campos de formulários planejados;
						
O cadastro deve ser feito e concluído com sucesso.

</td>
</tr>
</tbody>

</table>

<table>
    <thead>
        <tr> 
            <th>Caso do Teste</th>
            <th>CT-02 – Instrutor de Treino deve conseguir cadastrar horários para treino</th>
        </tr>
    </thead>
       <tbody>
        <tr> 
            <td>Requisitos Associados</td>
            <td>
             RF – 02 - O instrutor da academia deve cadastrar os horários disponíveis para treino. 
            </td>
        </tr>
        <tr> 
            <td>Objetivos do Teste</td>
            <td>
             Tela que carrega dados do instrutor de treino e suas configurações e dados pessoais, tal como treinos que ele é capacitado para acompanhar o usuário 
            </td>
        </tr>
        <tr> 
            <td>Passos</td>
            <td>
               1. Acessar o site que hospeda o aplicativo; </br>
               2. Baixar o Aplicativo; </br>
            3. Instalar no smartphone; </br>
              4. Obter as credenciais de acesso (fornecidas pelo time de desenvolvimento; </br>  
								5. Acessar as funcionalidades de cadastro de aula </br>  
									6. Inserir os dias e horários no app; </br>   
										7. Salvar e publicar a informação para o usuário.</br>  
            </td>
        </tr>
        <tr> 
            <td>Critérios de Êxito</td>
            <td>
Ao clicar no botão referente a categoria, o instrutor deve conseguir disponibilizar um horário para treino 
            </td>
        </tr>
    </tbody>
</table>

<table>
    <thead>
        <tr> 
            <th>Caso do Teste</th>
            <th>CT-03 – O instrutor deve cadastrar a lotação máxima por horário. </th>
        </tr>
    </thead>
       <tbody>
        <tr> 
            <td>Requisitos Associados</td>
            <td>
              RF – 03 - O instrutor deve cadastrar a lotação máxima por horário. 
            </td>
        </tr>
        <tr> 
            <td>Objetivos do Teste</td>
            <td>
            Validar se a página será exibida corretamente e se permitirá submeter um formulário e colocar em um campo específico quantos alunos poderá atender por horário. 
            </td>
        </tr>
        <tr> 
            <td>Passos</td>
            <td>
               1. Acessar o site que hospeda o aplicativo; </br>
               2. Baixar o Aplicativo; </br>
               3. Instalar no smartphone; </br>
            4. Acessar as funcionalidades de cadastro de aula </br>
						5. Com base nos horários e dias cadastrados, preencher limite máximo de vagas; </br>
						6. Salvar e publicar a informação para o usuário; </br>
            </td>
        </tr>
        <tr> 
            <td>Critérios de Êxito</td>
            <td>
              Após cadastro do horário e da vaga, deve aparecer no perfil do instrutor e usuário as vagas disponíveis 
            </td>
        </tr>
    </tbody>
</table>

<table>
    <thead>
        <tr> 
            <th>Caso do Teste</th>
            <th>CT- 04 – Usuário deve conseguir agendar e fazer o checkpoint do seu treino </th>
        </tr>
    </thead>
       <tbody>
        <tr> 
            <td>Requisitos Associados</td>
            <td>
             RF – 04 - O usuário deve conseguir fazer o checkpoint para o treino, em determinado horário, caso esse não esteja com lotação máxima. 
            </td>
        </tr>
        <tr> 
            <td>Objetivos do Teste</td>
            <td>
              Validar se ele conseguirá agendar um treino com vagas liberadas e se o app bloqueará o agendamento para um treino sem vagas. 
            </td>
        </tr>
        <tr> 
            <td>Passos</td>
            <td>
            1. Acessar o site que hospeda o aplicativo;</br>
2. Baixar o Aplicativo;</br>
3. Instalar no smartphone;</br>
4. Acessar as funcionalidades de cadastro de usuário</br>
5. Escolher um instrutor/atividade;</br>
6. Selecionar o treino e horário desejado;</br>
7. Receber a confirmação de treino agendado com sucesso;</br>
</td>
</tr>
<tr>
<td>Critérios de Êxito</td>
<td>
Após a seleção do instrutor, treino e horário, o usuário deve conseguir fazer o “check-in” do seu treino e demonstrar na tela do aplicativo. 
</td>
</tr>
</tbody>
 </table>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.

> **Links Úteis**:
>
> -   [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -   [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -   [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> -   [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -   [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> -   [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
