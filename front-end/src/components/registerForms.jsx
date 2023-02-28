export default function registerForms() {
  const ROUTE = 'customer_products';

  return (
    <div>
      <p>Cadastro</p>
      <form>
        <div>
          <p>Nome</p>
          <input
            data-testid={ `${ROUTE}__input-name` }
            type="text"
            placeholder="Seu nome"
          />
        </div>
        <div>
          <p>Email</p>
          <input
            data-testid={ `${ROUTE}__input-email` }
            type="email"
            placeholder="seu-email@site.com.br"
          />
        </div>
        <div>
          <p>senha</p>
          <input
            data-testid={ `${ROUTE}__input-password` }
            type="password"
          />
        </div>
        <div>
          <button
            type="submit"
            data-testid={ `${ROUTE}__button-register` }
          >
            Cadastrar
          </button>
        </div>
      </form>
      <div>
        {/* validação - elemento oculto */}
        <span data-testid={ `${ROUTE}__element-invalid_register` }>
          mensagem de erro
        </span>
      </div>
    </div>

  );
}
