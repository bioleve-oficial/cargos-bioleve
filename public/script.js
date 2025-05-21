const data = {
  administracao: {
    TI: [
      { nome: "Analista de Negócios de TI", descricao: "Desenvolve, planeja e coordena a implementação de projetos de sistemas de informação e aplicativos, com o objetivo de atender às expectativas e necessidades tecnológicas.", competencia: "Cultura De Segurança; Flexibilidade; Iniciativa; Visão Do Negocio; Trabalho Em Equipe; Gestão Do Conhecimento." },
      { nome: "Auxiliar de Informática", descricao: "Ajuda na montagem e manutenção de computadores, realiza a instalação de softwares e oferece suporte aos usuários.", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio." },
      { nome: "Gerente de Tecnologia da Informação (SBC)", descricao: "Supervisionar as atividades da área de Tecnologia da Informação, abrangendo a criação de projetos, implementação, otimização e reestruturação de processos, além do desenvolvimento a integração de sistemas com uso de tecnologia avançada. Liderar as equipes da área, orientando e fornecendo as diretrizes necessárias para os projetos.", competencia: "Cultura De Segurança; Liderança; Visão Sistemica; Planejamento De Futuro; Gestão De Mudanças; Gestão Estratégica." }
    ],
    Compras: [
      { nome: "Coordenador de Compras", descricao: "Gerenciar a equipe responsável por requisições de compras, realizar o processo de cotação e efetivar a aquisição de serviços, produtos, matérias-primas e equipamentos. Monitorar o fluxo de entregas e cultivar relacionamentos com fornecedores de materiais e serviços.", competencia: "Cultura De Segurança; Trabalho Em Equipe; Gestão Do Conhecimento; Liderança; Visão Sistemica; Gestão Do Desempenho."},
      { nome: "Assistente de Compras", descricao: "Executar atividades de suporte administrativo nos processos de compras dos diversos materiais utilizados pela empresa, que impactam diretamente ou indiretamente no produto final. Isso inclui a emissão de pedidos de compra, controle e acompanhamento dos prazos de entrega, cotação de materiais de menor complexidade técnica, entre outras tarefas relacionadas.", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio." }
    ],
    "Controladoria, Administrativo, Motorista e Serviços": [
      {nome: "Auxiliar de Controladoria", descricao: "Realizar tarefas relacionadas à área de Controladoria da empresa, coletando dados e informações, além de apoiar nas atividades ligadas aos sistemas contábeis utilizados.", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio."},
      {nome: "Assistente de Controladoria      ", descricao: "Gerenciar e realizar atividades ligadas à área de Controladoria, incluindo o controle de documentos, verificação de sistemas contábeis e monitoramento orçamentário, garantindo conformidade com princípios legais, políticas e diretrizes estabelecidas. Isso envolve a definição de métodos adequados de controle orçamentário, contábil e financeiro, alinhados à estratégia dos negócios a serem implementados.      ", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio.      "},
      {nome: "Coordenador de Controladoria      ", descricao: "Gerenciar os créditos da empresa, verificar a precisão de toda a documentação relacionada a pagamentos, conforme as normas e procedimentos estabelecidos. Elaborar previsões de caixa para identificar necessidades de captação ou aplicação de recursos, além de gerar relatórios sobre a situação de clientes inadimplentes, contatando os representantes para resolver pendências e preparar a documentação necessária para ações judiciais relacionadas aos créditos da empresa.      ", competencia: "Cultura De Segurança; Trabalho Em Equipe; Gestão Do Conhecimento; Liderança; Visão Sistemica; Gestão Do Desempenho.       "},
      {nome: "Supervisor de Controladoria      ", descricao: "Supervisionar as obrigações financeiras relacionadas ao recebimento dos créditos da empresa, com o intuito de identificar necessidades de captação ou aplicação de recursos. Monitorar e analisar o comportamento do mercado financeiro para apoiar decisões sobre captação ou aplicação de recursos. Elaborar o fluxo de caixa diário e semanal, controlando a situação de débitos dos clientes para liberar novos pedidos de compra.      ", competencia: "Cultura De Segurança; Flexibilidade; Iniciativa; Visão Do Negocio; Trabalho Em Equipe; Gestão Do Conhecimento; Liderança.      "},
      {nome: "Auxiliar Administrativo      ", descricao: "Realizar atividades administrativas diárias, incluindo digitação, organização de arquivos, distribuição de correspondência, atendimento telefônico e serviços externos, seguindo as regras e procedimentos definidos. Classificar, organizar e arquivar documentos por tipo e origem, utilizando pastas ou caixas adequadas, em conformidade com as normas estabelecidas.      ", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio."},
      {nome: "Motorista      ", descricao: "Conduzir veículos de maneira segura, respeitando todas as leis de trânsito e regulamentos de segurança.      ", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio.       "},
      {nome: "Auxiliar de Serviços Gerais      ", descricao: "Apoiar na realização de serviços diversos, como limpeza geral, copa, lavanderia e conservação e manutenção do ambiente de trabalho.      ", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio.       "},
      {nome: "Oficial de Manutenção Predial      ", descricao: "Executa instalações elétricas, hidráulicas e sanitárias, além de trabalhar com sistemas de ar condicionado. Mantém o controle dos níveis de estoque dos kits de manutenção geral. Identifica e corrige falhas em equipamentos, realiza a troca de materiais, mobiliário, máquinas e equipamentos conforme os procedimentos de segurança. Recebe as mercadorias e verifica se estão de acordo com os procedimentos estabelecidos.      ", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio.      "},
      {nome: "Pintor      ", descricao: "Avaliam e preparam as superfícies que serão pintadas, além de calcular a quantidade de materiais necessários. Identificam, preparam e aplicam tintas nas superfícies, realizam o polimento e retoques nas áreas pintadas. Secam as superfícies e fazem reparos nos equipamentos de pintura.      ", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio.      "},
      {nome: "Inspetor de Processos I      ", descricao: "Inspecionar produtos ou processos seguindo procedimentos preestabelecidos. Coletar dados básicos, como medições, amostras ou observações visuais. Preparar equipamentos ou ferramentas de inspeção. Relatar anomalias observadas ao supervisor sem realizar análises detalhadas. Autonomia: Baixa. Não realiza interpretação ou tomada de decisões técnicas.", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio.      "},
      {nome: "Inspetor de Processos II      ", descricao: "Realizar inspeções completas em produtos, processos ou sistemas. Interpretar resultados de inspeções e elaborar relatórios técnicos detalhados.Identificar problemas ou não conformidades e propor soluções. Assegurar que os padrões e especificações do processo sejam cumpridos. Trabalhar com normas técnicas específicas relacionadas à área de atuação. Autonomia: Moderada. Pode tomar decisões técnicas com base em normas e procedimentos. Comunicação direta com engenheiros ou gerentes para discutir melhorias ou problemas identificados.", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio.      "},
      {nome: "Inspetor de Processos III      ", descricao: "Desenvolver e revisar procedimentos de inspeção. Certificar e treinar Inspetores Nível 1 e 2. Fornecer orientação técnica sobre normas e padrões da indústria. Planejar e executar auditorias ou inspeções complexas. Analisar falhas de processos e propor ações corretivas e preventivas em nível estratégico. Validar ou aprovar relatórios e certificações emitidos por outros inspetores. Representar a empresa em auditorias externas ou certificações. Autonomia: Alta. É o principal responsável técnico por decisões relacionadas à inspeção. Atua como referência técnica dentro da organização.", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio.      "}
    ],
    "Adm Vendas e Trade Marketing": [
      {nome: "Coordenador Comercial      ", descricao: "Gerenciar as atividades relacionadas ao comportamento do mercado e aos produtos da empresa, incluindo a análise de estratégias e ações da concorrência. Elaborar relatórios gerenciais, identificar e destacar tendências de mercado, além de desenvolver e analisar projeções e quadros comparativos para apoiar a gerência na tomada de decisões, garantindo que as vendas dos produtos sejam realizadas em condições que atendam aos resultados esperados.      ", competencia: "Cultura De Segurança; Trabalho Em Equipe; Gestão Do Conhecimento; Liderança; Visão Sistemica; Gestão Do Desempenho.       "},
      {nome: "Analista Comercial       ", descricao: "Realizar atividades ligadas ao comportamento do mercado e aos produtos da empresa, como analisar as estratégias e ações da concorrência, ajudar na elaboração de relatórios gerenciais que indiquem tendências de mercado, e participar na análise e criação de projeções e quadros comparativos. Isso visa fornecer suporte à gerência na tomada de decisões e garantir que as vendas dos produtos ocorram em condições que atendam às metas estabelecidas.      ", competencia: "Cultura De Segurança; Flexibilidade; Iniciativa; Visão Do Negocio; Trabalho Em Equipe; Gestão Do Conhecimento.      "},
      {nome: "Assistente Administrativo      ", descricao: "Executar atividades que auxiliem na administração dos recursos financeiros da empresa, elaborando relatórios que mantenham a diretoria informada sobre todas as estratégias e decisões adotadas na área.      ", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio.      "},
    ],
    "Diretoria Lindóia": [
      {nome: "Diretor industrial/operações e administrativo       ", descricao: "Gerenciar e supervisionar as operações de produção da empresa, focando na fabricação de seus produtos. Assegurar a utilização eficiente de equipamentos, matérias-primas, insumos e pessoal, monitorando a implementação dos programas de produção. Avaliar índices de produtividade e propor o desenvolvimento de novos dispositivos para otimizar as operações das máquinas e equipamentos.      ", competencia: "Cultura De Segurança; Liderança; Visão Sistemica; Planejamento De Futuro; Gestão De Mudança; Gestão Estratégica.      "},
    ],
    RH: [
      { nome: "Analista de Treinamento e Desenvolvimento", descricao: "Realizar e apoiar os outros analistas da equipe nas atividades relacionadas ao treinamento e desenvolvimento pessoal dentro da empresa. Colaborar na identificação das necessidades de treinamento nas diferentes áreas e elaborar manuais e materiais para as formações internas. Promover cursos e palestras, estimulando a participação dos interessados.      ", competencia: "Cultura De Segurança; Flexibilidade; Iniciativa; Visão Do Negocio; Trabalho Em Equipe; Gestão Do Conhecimento." },
      { nome: "Analista de Recursos Humanos ", descricao: "Conduzir uma análise da área de Recursos Humanos, identificando e avaliando as necessidades de treinamento, desenvolvimento, planos de carreira, desempenho, benefícios, condições de trabalho, folha de pagamento, regristro de ponto entre outros aspectos.      ", competencia: "Cultura De Segurança; Flexibilidade; Iniciativa; Visão Do Negocio; Trabalho Em Equipe; Gestão Do Conhecimento." },
      { nome: "Auxiliar de Recursos Humanos", descricao: "Apoiar as atividades da área de Recursos Humanos, relacionadas à contratação, capacitação de profissionais, salários, entre outros, planejando, organizando e controlando os programas, além de avaliar sua eficácia para garantir a contratação de funcionários qualificados e promover o desenvolvimento dos colaboradores da empresa.", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio."},
      { nome: "Coordenador de Recursos Humanos (SBC)", descricao: "Gerenciar o departamento de recursos humanos, lidando com folhas de pagamento, recrutamento e seleção, admissões e demissões de funcionários, treinamento, cálculos de rescisão e férias, controle de ponto eletrônico, além de criar planos de benefícios e salários.", competencia: "Cultura De Segurança; Trabalho Em Equipe; Gestão Do Conhecimento; Liderança; Visão Sistemica; Gestão Do Desempenho. "}
    ],
    "Contas a Pagar - SBC": [
      {nome: "Auxiliar Administrativo      ", descricao: "Executar tarefas de rotina administrativa, envolvendo digitação, arquivo, distribuição de correspondência, atendimento de telefone e serviços externos, observando as regras e procedimentos estabelecidos. Separar, ordenar e arquivar os documentos, por tipo e origem, utilizando-se de pastas ou caixas apropriadas, observando as regras e procedimentos estabelecidos.      ", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio.      "},
    ],
    "GC Diretoria Comercial": [
      {nome: "Diretor Comercial", descricao: "Responder pela direção da empresa, nas atividades relacionadas área Comercial/Mercado. Planejar, organizar e controlar os programas e sua execução, avaliar resultados, segundo a política específica e a política comercial, para assegurar a venda dos produtos fabricados em condições que atendam aos resultados previstos.      ", competencia: "Cultura De Segurança; Liderança; Visão Sistemica; Planejamento De Futuro; Gestão De Mudança; Gestão Estratégica"}
    ],
    "DIS Coord Campinas": [
      {nome: "Consultor Comercial      ", descricao: "Responder pelas atividades de consultoria, em assuntos referentes à área Comercial, compreendendo: diagnósticos, planejamento estratégico de atuação, desenvolvimento dos trabalhos, propondo alternativas e soluções à Direção da empresa.      ", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio;       "}
    ],
  },
  fabrica: {
    Expedição: [
      { nome: "Gerente de Logística I     ", descricao: " Auxilia nas operações logísticas, como controle de estoques, transporte e distribuição de produtos. Ele monitora e organiza o fluxo de mercadorias, apoia na gestão de armazéns e colabora na implementação de processos para melhorar a eficiência operacional. Sua função também inclui o suporte à equipe de logística e o acompanhamento de indicadores de desempenho, sempre sob a supervisão de um gerente sênior.      ", competencia: "Cultura De Segurança; Liderança; Visão Sistemica; Planejamento De Futuro; Gestão De Mudanças; Gestão Estratégica.      " },
      { nome: "Gerente de Logística II", descricao: "É responsável por coordenar e otimizar as operações logísticas, incluindo controle de estoques, transporte e distribuição de produtos. Ele implementa processos para melhorar a eficiência, acompanha indicadores de desempenho e gerencia equipes. Além disso, atua na negociação com fornecedores e transportadoras, buscando reduzir custos e garantir a entrega pontual, com mais autonomia do que o nível júnior, mas ainda com supervisão de um gerente sênior.      ", competencia: "Cultura De Segurança; Liderança; Visão Sistemica; Planejamento De Futuro; Gestão De Mudanças; Gestão Estratégica.      " },
      { nome: "Gerente de Logística III", descricao: "É responsável por liderar e planejar a estratégia logística de toda a operação, garantindo a eficiência em transporte, armazenamento e distribuição de produtos. Ele supervisiona equipes, negocia com fornecedores e transportadoras, e gerencia o orçamento do departamento. Sua função também envolve a análise de indicadores de desempenho para implementar melhorias contínuas e reduzir custos, além de tomar decisões estratégicas para otimizar a cadeia de suprimentos e atender às demandas do negócio.      ", competencia: "Cultura De Segurança; Liderança; Visão Sistemica; Planejamento De Futuro; Gestão De Mudanças; Gestão Estratégica.      " },
      { nome: "Coordenador de Logística I      ", descricao: "Auxilia nas operações logísticas diárias, como controle de estoques, organização de transporte e distribuição de produtos. Ele apoia a equipe na execução de processos, acompanha indicadores de desempenho e ajuda a resolver problemas operacionais sob a orientação de um coordenador ou gerente sênior, garantindo que as atividades logísticas ocorram de maneira eficiente e no prazo.      ", competencia: "Cultura De Segurança; Trabalho Em Equipe; Gestão Do Conhecimento; Liderança; Visão Sistemica; Gestão Do Desempenho.      " },
      { nome: "Coordenador de Logística II ", descricao: "É responsável por gerenciar e otimizar as operações logísticas, incluindo controle de estoques, transporte e distribuição de produtos. Ele coordena a equipe, monitora processos, identifica melhorias e resolve problemas operacionais. Com mais autonomia que o nível júnior, o coordenador pleno também auxilia na negociação com fornecedores e transportadoras, garantindo que as entregas sejam realizadas de forma eficiente e dentro dos prazos estabelecidos.      ", competencia: "Cultura De Segurança; Trabalho Em Equipe; Gestão Do Conhecimento; Liderança; Visão Sistemica; Gestão Do Desempenho.       " },
      { nome: "Coordenador de Logística III ", descricao: "É responsável por planejar, coordenar e otimizar todas as operações logísticas da empresa, incluindo transporte, armazenamento e distribuição de produtos. Ele lidera a equipe, implementa melhorias nos processos, negocia com fornecedores e transportadoras, e monitora indicadores de desempenho. Além disso, resolve problemas complexos e toma decisões estratégicas para garantir a eficiência e o cumprimento dos prazos, com um alto nível de autonomia.      ", competencia: "Cultura De Segurança; Trabalho Em Equipe; Gestão Do Conhecimento; Liderança; Visão Sistemica; Gestão Do Desempenho.      " },
      { nome: "Especialista de Logística I      ", descricao: "Apoia na execução e análise de processos logísticos, como controle de estoques, transporte e distribuição de produtos. Ele auxilia na implementação de soluções para melhorar a eficiência operacional, coleta e analisa dados logísticos, e dá suporte em tarefas administrativas. Trabalha sob orientação de profissionais mais experientes, buscando aprendizado e desenvolvimento na área.      ", competencia: "Cultura De Segurança; Flexibilidade; Iniciativa; Visão Do Negócio; Trabalho Em Equipe; Gestão Do Conhecimento.       " },
      { nome: "Especialista de Logística II  ", descricao: "Apoia na execução e análise de processos logísticos, como controle de estoques, transporte e distribuição de produtos. Ele auxilia na implementação de soluções para melhorar a eficiência operacional, coleta e analisa dados logísticos, e dá suporte em tarefas administrativas. Trabalha sob orientação de profissionais mais experientes, buscando aprendizado e desenvolvimento na área.      ", competencia: "Cultura De Segurança; Flexibilidade; Iniciativa; Visão Do Negócio; Trabalho Em Equipe; Gestão Do Conhecimento.      " },
      { nome: "Especialista de Logística III  ", descricao: "É responsável por liderar a análise e otimização de processos logísticos complexos, incluindo transporte, armazenamento e distribuição. Ele desenvolve e implementa estratégias para melhorar a eficiência da cadeia de suprimentos, gerencia indicadores de desempenho e coordena projetos de inovação. Com alta autonomia, o especialista sênior também atua na negociação com fornecedores, na solução de problemas estratégicos e no treinamento de equipes, visando a excelência operacional.      ", competencia: "Cultura De Segurança; Flexibilidade; Iniciativa; Visão Do Negócio; Trabalho Em Equipe; Gestão Do Conhecimento.      " },
      { nome: "Operador de Empilhadeira I      ", descricao: "É responsável por operar a empilhadeira para movimentar, armazenar e organizar produtos no estoque. Ele auxilia na carga e descarga de materiais, sempre sob supervisão, e garante a organização e segurança das operações no armazém.      ", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio.      " },
      { nome: "Operador de Empilhadeira II", descricao: "Opera a empilhadeira para movimentar, armazenar e organizar produtos no estoque de maneira eficiente. Ele também é responsável pela carga e descarga de materiais, realiza a conferência de produtos e mantém a segurança e organização do armazém, com maior autonomia e responsabilidade.      ", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio.      " },
      { nome: "Operador de Empilhadeira III", descricao: "Lidera as operações de movimentação de materiais no estoque, utilizando a empilhadeira de forma eficiente e segura. Ele é responsável pela carga, descarga e organização de produtos, além de coordenar atividades de rotina, supervisionar outros operadores e garantir a manutenção adequada dos equipamentos, sempre visando a segurança e a eficiência das operações.      ", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio.      " },
      { nome: "Auxiliar de Expedição I      ", descricao: "É responsável por apoiar nas atividades de separação, organização e embalagem de produtos para envio. Ele também auxilia no controle de estoque, prepara documentos de transporte e acompanha a logística de entrega, sempre sob supervisão.      ", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio.      " },
      { nome: "Auxiliar de Expedição II      ", descricao: "É responsável pela separação, embalagem e organização de produtos para envio, além de garantir o controle de estoque e a conferência de documentos de transporte. Ele também auxilia na coordenação das atividades logísticas, garantindo que os processos de expedição ocorram de forma eficiente e dentro dos prazos estabelecidos.      ", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio.      " },
      { nome: "Auxiliar de Expedição III      ", descricao: "Lidera as atividades de expedição, como separação, embalagem e organização dos produtos para envio, além de coordenar o controle de estoque e conferir os documentos de transporte. Ele otimiza os processos logísticos, garante a eficiência das operações e o cumprimento dos prazos de entrega.      ", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio.      " },
      { nome: "Assistente de Logistica I      ", descricao: "Dá suporte nas atividades logísticas, como controle de estoque, organização de produtos para transporte, agendamento de entregas e conferência de documentos. Ele também auxilia no acompanhamento de pedidos e nas rotinas operacionais do setor, sempre com supervisão.      ", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio.      " },
      { nome: "Assistente de Logistica II      ", descricao: "É responsável por auxiliar na coordenação das operações logísticas, como controle de estoque, organização de transporte e gestão de documentos relacionados a entregas. Ele também monitora o fluxo de materiais, acompanha o desempenho de fornecedores e garante a eficiência dos processos logísticos, com maior autonomia.      ", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio.      " },
      { nome: "Assistente de Logistica III      ", descricao: "Coordena e otimiza as operações logísticas, incluindo controle de estoque, organização de transporte e acompanhamento de entregas. Ele gerencia processos mais complexos, resolve problemas operacionais e auxilia na implementação de melhorias, sempre com foco em eficiência, redução de custos e cumprimento de prazos.      ", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio.      " },
      { nome: "Conferente I ", descricao: "Apoia na conferência de produtos, verificando se estão corretos em relação aos pedidos antes do envio. Ele confere a quantidade, descrição e qualidade das mercadorias, realiza a separação e embalagem, e auxilia na organização do processo logístico. Trabalha sob a supervisão de profissionais mais experientes, ajudando a garantir que os produtos sejam expedidos corretamente e dentro dos prazos.      ", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio.      " },
      { nome: "Conferente II  ", descricao: "É responsável por conferir e validar os produtos que serão enviados, garantindo que estejam corretos quanto a quantidade, descrição e qualidade. Ele realiza a separação, embalagem e organiza a expedição, além de monitorar e controlar o processo de expedição para garantir a precisão. Com mais autonomia, o conferente pleno também pode auxiliar na orientação de equipes júnior e na implementação de melhorias nos processos de conferência e expedição.", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio.      " },
      { nome: "Conferente III ", descricao: "É responsável por supervisionar e garantir a precisão na conferência de produtos antes do envio, assegurando que todos os itens estejam corretos quanto a quantidade, descrição e qualidade. Ele coordena e orienta a equipe de conferentes, resolve problemas operacionais e implementa melhorias nos processos de expedição. Além disso, controla a documentação necessária e assegura que os prazos de entrega sejam cumpridos com eficiência.      ", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio.      " },
      { nome: "Assistente Administrativo I      ", descricao: "Apoiar atividades administrativas básicas, como arquivamento de documentos, atendimento telefônico e atualização de planilhas. Atua sob supervisão direta, com foco em aprendizado e execução de tarefas operacionais.      ", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio.      " },
      { nome: "Assistente Administrativo II", descricao: "Executar atividades administrativas de média complexidade, com foco em otimização de processos internos e suporte a diferentes áreas da empresa. Atua de forma mais independente.      ", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio.      " },
      { nome: "Assistente Administrativo III", descricao: "Coordenar atividades administrativas mais complexas e estratégicas, apoiando diferentes departamentos na melhoria de processos e na tomada de decisões. Atua como ponto de referência para a equipe administrativa.      ", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio.      " },
      { nome: "Auxiliar de Logistica I      ", descricao: "Apoia nas tarefas operacionais da logística, como organização de estoque, separação de pedidos e apoio no processo de expedição. Ele também auxilia no controle de entradas e saídas de produtos, realiza atividades administrativas e contribui na manutenção da organização do armazém. Trabalha sob supervisão, aprendendo e executando funções básicas da área.      ", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio.      " },
      { nome: "Auxiliar de Logistica II      ", descricao: "É responsável por apoiar nas operações logísticas, como controle de estoque, separação e embalagem de pedidos, e no processo de expedição. Ele também realiza o registro de entradas e saídas de produtos, organiza o armazém e colabora na gestão de documentos. Com mais autonomia, o auxiliar pleno ajuda a otimizar processos e pode orientar colegas de nível júnior.      ", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio.      " },
      { nome: "Auxiliar de Logistica III      ", descricao: "É responsável por coordenar e otimizar as operações logísticas diárias, como controle de estoques, organização de armazém, separação de pedidos e expedição. Ele supervisiona e orienta a equipe, realiza registros e controle de entradas e saídas de produtos, além de identificar oportunidades de melhoria nos processos logísticos. Com alta autonomia, o auxiliar sênior também apoia a implementação de estratégias e soluções para aumentar a eficiência das operações.      ", competencia: "Cultura De Segurança; Disciplina; Flexibilidade; Iniciativa; Visão Do Negocio.      " },
      { nome: "Líder de Expedição I      ", descricao: "Auxilia na coordenação das atividades de expedição, supervisionando a preparação, embalagem e envio de pedidos. Ele apoia a equipe no processo de carga, organiza a distribuição e garante que as entregas sejam feitas dentro dos prazos estabelecidos. Trabalha sob orientação de líderes mais experientes, ajudando na gestão de processos e na comunicação com outros departamentos e transportadoras.      ", competencia: "Cultura De Segurança; Flexibilidade; Iniciativa; Visão Do Negocio; Trabalho Em Equipe; Gestão Do Conhecimento; Liderança.      " },
      { nome: "Líder de Expedição II  ", descricao: "É responsável por coordenar e otimizar as atividades de expedição, garantindo que os pedidos sejam preparados, embalados e enviados corretamente, dentro dos prazos e com qualidade. Ele lidera a equipe, organiza o fluxo de trabalho, controla o estoque de expedição e mantém comunicação com transportadoras e outros setores. Além disso, monitora indicadores de desempenho e implementa melhorias nos processos para aumentar a eficiência.      ", competencia: "Cultura De Segurança; Flexibilidade; Iniciativa; Visão Do Negocio; Trabalho Em Equipe; Gestão Do Conhecimento; Liderança.      " },
      { nome: "Líder de Expedição III ", descricao: "É responsável por supervisionar e otimizar todas as atividades de expedição, garantindo a entrega eficiente e pontual dos produtos. Ele lidera a equipe de expedição, coordena a logística de carga, gerencia processos, controla o desempenho e resolve problemas operacionais complexos. Além disso, atua na implementação de melhorias, negociação com transportadoras e integração com outros setores para garantir que os objetivos de eficiência e qualidade sejam atendidos.      ", competencia: "Cultura De Segurança; Flexibilidade; Iniciativa; Visão Do Negocio; Trabalho Em Equipe; Gestão Do Conhecimento; Liderança.      " }
    ],
    Produção: [
      { nome: "Operador de Máquina", descricao: "Opera e monitora máquinas industriais.", competencia: "Precisão e conhecimento técnico." },
      { nome: "Ajudante de Produção", descricao: "Auxilia no processo produtivo.", competencia: "Trabalho em equipe e esforço físico." }
    ],
    Qualidade: [
      { nome: "Analista Controle Qualidade II", descricao: "Realiza abertura e  fechamento da fábrica. Libera e acompanha  as linhas de produções, testes pertinentes e testes físicos químicos. Atua na limpeza e sanitização de tubulações, máquinas antes e após o processo de produção. Realiza o desenvolvimento de procedimentos para a área da qualidade. Responsável pelo recebimento de testes de materiais, e pela aprovação de novos fornecedores.", competencia: "Cultura de segurança; flexibilidade; iniciativa; visão do negocio; trabalho em equipe; gestão do conhecimento." },
      { nome: "Analista Controle Qualidade I", descricao: "Realiza abertura e  fechamento da fábrica. Libera e acompanha  as linhas de produções, testes pertinentes e testes físicos químicos. Atua na limpeza e sanitização de tubulações, máquinas antes e após o processo de produção. Realiza o desenvolvimento de procedimentos para a área da qualidade. Responsável pelo recebimento de testes de materiais, e pela aprovação de novos fornecedores.", competencia: "Cultura de segurança; flexibilidade; iniciativa; visão do negocio; trabalho em equipe; gestão do conhecimento." },
      { nome: "Encarregado Controle Qualidade II", descricao: "Realiza a análise microbiológica para a verificação da qualidade dos produtos da divisão água para ter o controle dos microorganismos. Atua na preparação e no descarte de material microbiológico gerado no laboratório.", competencia: "Cultura de segurança; flexibilidade; iniciativa; visão do negócio; trabalho em equipe; gestão do conhecimento." },
      { nome: "Supervisor Controle Qualidade II ", descricao: "Atua na coleta de amostras, limpeza e sanitização de modo geral em  poços e reservatórios. Responsável pela manutenção necessária em tubulações e equipamentos da área externa e interna da fábrica.", competencia: "Cultura de segurança; flexibilidade; iniciativa; visão do negocio; trabalho em equipe; gestão do conhecimento; liderança;" },
      { nome: "Auxiliar Controle Qualidade III", descricao: "Atua no acompanhamento das linhas de produção e testes pertinentes. Realiza conferência de matérias primas e no preparo dos produtos. Faz o recebimento e os testes de materiais. Desempenha a análise físico químico.", competencia: "Cultura de segurança; disciplina; flexibilidade; iniciativa; visão do negocio." },
      { nome: "Auxiliar Controle Qualidade II ", descricao: "Atua na coleta de amostras e de organização e limpeza de modo geral em poços e reservatórios. Efetua análises físico químicos. ", competencia: "Cultura de segurança; disciplina; flexibilidade; iniciativa; visão do negocio." },
      { nome: "Encarregado Controle Qualidade II", descricao: "Realiza abertura e  fechamento da fábrica. Libera e acompanha  as linhas de produções, testes pertinentes e testes físicos químicos. Atua na limpeza e sanitização de tubulações, máquinas antes e após o processo de produção. Realiza o desenvolvimento de procedimentos para a área da qualidade. Responsável pelo recebimento de testes de materiais, e pela aprovação de novos fornecedores.", competencia: "Cultura de segurança; flexibilidade; iniciativa; visão do negócio; trabalho em equipe; gestão do conhecimento."},
      { nome: "Gerente Controle Qualidade I", descricao: "Supervisiona e gerencia toda a área da qualidade, bem como as coletas, matérias primas, análises físico químico, microbiológicos e todos os processos do controle de qualidade. Coordena a área de ped e assuntos regulatórios. Realiza auditorias tratativas com fornecedores e clientes. Exerce treinamentos.", competencia: "Cultura de segurança; liderança; visão sistemica; planejamento de futuro; gestão de mudanças; gestão estratégica; " },
      { nome: "Analista Controle Qualidade I  ", descricao: "Realiza a liberação de produtos para a linha de envase. Exerce as conferências de ordem de produção e de matérias primas no preparo dos produtos. Atua no revezamento do acompanhamento das linhas de produção e testes pertinentes. Faz o recebimento de materiais, e análise físico químicos. Exerce o teste e aprovação de novos fornecedores e o desenvolvimento de produtos.", competencia: "Cultura de segurança; flexibilidade; iniciativa; visão do negocio; trabalho em equipe; gestão do conhecimento." },
      { nome: "Analista Controle Qualidade III", descricao: "Realiza a análise microbiológica para a verificação da qualidade dos produtos da divisão suco para ter o controle dos microorganismos. Atua na preparação e no descarte de material microbiológico gerado no laboratório. Realiza análises físico químico. Atua na conferência de matérias primas para o preparo dos produtos. Opera na liberação de produtos para a linha de envase. Efetua o revezamento do acompanhamento das linhas de produção e testes pertinentes. Faz o recebimento de testes de materiais e o desenvolvimento de procedimentos da área de qualidade.", competencia: "Cultura de segurança; flexibilidade; iniciativa; visão do negocio; trabalho em equipe; gestão do conhecimento." }
    ],
    Produção: [
      {nome: "", descricao: "", competencia: ""}
    ]
  }
};

const departmentsContainer = document.getElementById("departments");
const modal = document.getElementById("modal");
const modalErro = document.getElementById("modalErro");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalCompetencia = document.getElementById("modalCompetencia");
const closeModal = document.getElementById("closeModal");
const closeModalErro = document.getElementById("closeModalErro");

let activeArea = null;

function normalizeText(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function renderDepartments(area) {
  if (activeArea === area) {
    departmentsContainer.innerHTML = "";
    activeArea = null;
    return;
  }

  activeArea = area;
  departmentsContainer.innerHTML = "";

  if (!data[area]) return;

  Object.entries(data[area]).forEach(([depNome, cargos]) => {
    const depCard = document.createElement("div");
    depCard.className = "department-card";

    const title = document.createElement("div");
    title.className = "department-title";
    title.textContent = depNome;

    const btn = document.createElement("button");
    btn.className = "department-button";
    btn.textContent = "Visualizar cargos";

    const cargoList = document.createElement("div");
    cargoList.className = "cargo-list";
    cargoList.style.display = "none";

    btn.addEventListener("click", () => {
      cargoList.style.display = cargoList.style.display === "none" ? "flex" : "none";
    });

    cargos.forEach(cargo => {
      const card = document.createElement("div");
      card.className = "cargo-card";

      const nome = document.createElement("span");
      nome.textContent = cargo.nome;

      const visualizar = document.createElement("button");
      visualizar.textContent = "Visualizar";
      visualizar.addEventListener("click", () => showModal(cargo));

      card.appendChild(nome);
      card.appendChild(visualizar);
      cargoList.appendChild(card);
    });

    depCard.appendChild(title);
    depCard.appendChild(btn);
    depCard.appendChild(cargoList);
    departmentsContainer.appendChild(depCard);
  });
}

function showModal(cargo) {
  modalTitle.textContent = cargo.nome;
  modalDescription.textContent = cargo.descricao;
  modalCompetencia.textContent = "Competências: " + cargo.competencia;
  modal.classList.remove("hidden");
}

function searchCargos() {
  const termo = normalizeText(document.getElementById("searchInput").value);
  if (!termo) return;

  const resultados = [];

  Object.entries(data).forEach(([area, setores]) => {
    Object.entries(setores).forEach(([setor, cargos]) => {
      cargos.forEach(cargo => {
        const nomeNormalizado = normalizeText(cargo.nome);
        if (nomeNormalizado.includes(termo)) {
          resultados.push(cargo);
        }
      });
    });
  });

  departmentsContainer.innerHTML = "";

  if (resultados.length === 0) {
    modalErro.classList.remove("hidden");
    return;
  }

  const resultadoCard = document.createElement("div");
  resultadoCard.className = "department-card";

  const title = document.createElement("div");
  title.className = "department-title";
  title.textContent = "Resultados da busca";

  const lista = document.createElement("div");
  lista.className = "cargo-list";

  resultados.forEach(cargo => {
    const card = document.createElement("div");
    card.className = "cargo-card";

    const nome = document.createElement("span");
    nome.textContent = cargo.nome;

    const btn = document.createElement("button");
    btn.textContent = "Visualizar";
    btn.addEventListener("click", () => showModal(cargo));

    card.appendChild(nome);
    card.appendChild(btn);
    lista.appendChild(card);
  });

  resultadoCard.appendChild(title);
  resultadoCard.appendChild(lista);
  departmentsContainer.appendChild(resultadoCard);
}

// Listeners
document.getElementById("searchButton").addEventListener("click", searchCargos);
document.getElementById("searchInput").addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const termo = document.getElementById("searchInput").value.trim();
    if (termo !== "") {
      searchCargos();
    }
  }
});
closeModal.addEventListener("click", () => modal.classList.add("hidden"));
closeModalErro.addEventListener("click", () => modalErro.classList.add("hidden"));
document.querySelectorAll(".main-card").forEach(card => {
  card.addEventListener("click", () => {
    const area = card.getAttribute("data-area");
    renderDepartments(area);
  });
});
