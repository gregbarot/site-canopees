export default function Email({
  inputsStates,
  setInputsStates,
  showValidation,
}) {
  return (
<>
        <label htmlFor="email">
        E-mail * <span className="required">Saisissez votre email</span>
        </label>

        <input
        id="email"
        type="email"
        name="email"
        placeholder="bob.tom@email.com"
        value={inputsStates.email}
        onChange={e =>
            setInputsStates({...inputsStates, email: e.target.value})
        }
        />

        {showValidation.email && (
        <p className="error-message">
            Veuillez saisir une adresse e-mail valide.
        </p>
        )}
</>
  )
}