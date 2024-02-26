type Usuario = {
    nome: string;
    email: string;
    cpf: string;
    rg: string;
    dataNacimento?: string;
};

const cadastrarUsuário = (info: Usuario): Usuario => {
    return info;
};

type NovoUsuario = Omit<Usuario, "rg">;
type CamposObrigatorios = Required<NovoUsuario>

const usuarioSemRg: CamposObrigatorios = {
    nome: 'sva',
    email: 'uydcyu',
    cpf: 'ISNADVUIN',
    dataNacimento: 'NEIUDNW'
};
