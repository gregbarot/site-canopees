export default function Rgpd({
  inputsStates,
  setInputsStates,
  showValidation,
}) {
  return (
<>
        <input
        id="rgpd"
        type="checkbox"
        name="consentRgpd"
        checked={inputsStates.rgpd}
        onChange={e =>
          setInputsStates({...inputsStates, rgpd: e.target.value})
        }
      />

      <label htmlFor="rgpd">
        En soumettant ce formulaire, j’accepte que mes données soient utilisées
        dans le cadre de ma demande *
      </label>

      {showValidation.consentRgpd && (
        <p className="required">
          Vous devez accepter cette condition pour envoyer le formulaire.
        </p>
      )}
</>  )
}