// SOLID

// S - Single responsibility principle, princípio da responsabilidade única
// Significa que cada módulo, cada classe, cada método, só tem que ter um motivo para mudar, para sofrer alterações, para executar código

// O - open/closed principle, ou seja, o princípio do aberto/fechado
// Significa que a classe tem que estar aberta para ser expandida, porém fechada, para ser modificada. Ou seja, a ideia nesse caso, é que seja possível adicionar funcionalidades em uma classe, mas não alterar métodos de uma classe que já existem e que já estão em funcionamento ou alterar essas classes mesmo.

// L - Liskov substitution principle, o princípio da substituição de Liskov
// Liskov é Barbara Liskov, uma cientista da computação, que foi quem pensou, quem primeiro formalizou isso que chamamos de princípio de substituição. Então, é porque o princípio é dela, e não porque a Barbara Liskov vai ser substituída.
// Significa que, se temos uma subclasse e uma superclasse, ou seja, uma classe que herda da outra, deveria ser possível sempre substituir uma pela outra, sem que nada deixe de funcionar.
// Em outras palavras, se uma classe tem um atributo, a subclasse dela também tem que ter. Se algo funciona na superclasse, tem que funcionar na subclasse também. Ou seja, uma subclasse não pode fazer o que chamamos de quebrar contratos feitos pela superclasse. Ou seja, uma coisa que está estabelecida pela superclasse, não pode ser quebrada pela subclasse.

// I - interface segregation principle, que é o princípio de segregação de interface.
// Significa que clientes não devem ser forçados a depender de interfaces que eles não usam. Vamos dar uma explicada, sem utilizar interfaces. Basicamente, esse princípio diz que não podemos impor uma implementação de uma coisa que não vai ser necessária. Por exemplo, eu, Juliana, sou vegetariana, então minha classe Juliana não utilizaria métodos, por exemplo, que envolvam carne, todos os métodos que envolvem carne na classe Juliana são desnecessários.

// D - dependency inversion principle, que é o princípio da inversão de dependência.
// Digamos que módulos que estão em um nível mais acima da hierarquia de classes, não podem depender de nada que está abaixo deles, e também diz que nenhum deles podem depender de implementações, e sim, de abstrações.
// Quando falamos de abstração, estamos falando de esconder detalhes de como uma coisa funciona. Então, usamos um computador, utilizamos as interfaces do computador mesmo, o teclado é uma interface do computador, então a interface entre o computador e o ser humano, todas as entradas USB são interfaces por onde nos comunicamos com o computador, mas não vemos por dentro o funcionamento dele, o funcionamento dele, interno, teoricamente, não para nós que estudamos e trabalhamos na área, mas para o usuário do computador, a implementação interna do computador, como ele funciona por dentro, não é uma coisa que ele precisa saber, uma coisa que interessa.
// Ou seja, a questão de abstração é abstrair os detalhes de como determinado método funciona, e não fazer com que tudo seja implementado junto. Então esse D, fala sobre abstração, sobre justamente encapsularmos as coisas, escondermos como determinada função funciona, determinado método funciona, e apenas quem usa os módulos, quem usa os métodos só tem que saber da abstração, eu sei que digitar coisas no teclado, vão aparecer as letras na tela, e como isso está implementado internamente, não é minha responsabilidade saber.
