import UserInput from "../UserInput/UserInput";

function InputsContainer({ updateInvestments }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <UserInput
                    label="Initial Investiment"
                    name="initialInvestment"
                    updateInvestments={updateInvestments}
                />
                <UserInput
                    label="Annual Investiment"
                    name="annualInvestment"
                    updateInvestments={updateInvestments}
                />
            </div>
            <div className="input-group">
                <UserInput
                    label="Expected Return (%, per year)"
                    name="expectedReturn"
                    updateInvestments={updateInvestments}
                />
                <UserInput
                    label="Duration (years)"
                    name="duration"
                    updateInvestments={updateInvestments}
                />
            </div>
            

        </section>
    )
}

export default InputsContainer;