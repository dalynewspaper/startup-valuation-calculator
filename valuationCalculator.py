def calculate_valuations(amount_raised, equity_percentage):
    """
    Calculate pre-money and post-money valuations.

    :param amount_raised: The amount of money the startup is raising.
    :param equity_percentage: The percentage of equity given away for the amount raised.
    :return: A tuple containing (pre_money_valuation, post_money_valuation)
    """
    post_money_valuation = amount_raised / (equity_percentage / 100)
    pre_money_valuation = post_money_valuation - amount_raised
    return pre_money_valuation, post_money_valuation

# Example usage
amount_raised = float(input("Enter the amount being raised (in dollars): "))
equity_percentage = float(input("Enter the equity percentage given away: "))

pre_money, post_money = calculate_valuations(amount_raised, equity_percentage)
print(f"Pre-Money Valuation: ${pre_money:,.2f}")
print(f"Post-Money Valuation: ${post_money:,.2f}")
