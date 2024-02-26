type Item = {
    nome: string;
    descricao: string;
    valor: number;
};

type Cartao = {
    numero: number;
    validade: string;
    nome: string;
    cvv: number;
};

type Carrinho = {
    item: Item;
    qtd: number;
    desconto: number;
    frete: number;
    tipoTransacao: "credito" | "Debito";
    cartao: Cartao;
};

type Endereco = {
    cep: string;
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
};

type CarrinhoFormatado = Omit<Carrinho, "tipoTransacao"> & {
    endereco: Endereco;
    tipoTransacao: Lowercase<"credito" | "Debito">
};

// type tipoTransacaoLower = Lowercase<Carrinho["tipoTransacao"]>;

// type CarrinhoFormatado = {
//     item: Item;
//     qtd: number;
//     desconto: number;
//     endereco: Endereco
//     frete: number;
//     tipoTransacao: tipoTransacaoLower;
//     cartao: Cartao;
// }
