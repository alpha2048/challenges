class WebsiteController < ApplicationController
  def index
    @token = nil
  end

  def donate
    charity = Charity.find_by(id: params[:charity])
    omise_token = params[:omise_token]
    amount = params[:amount]
    currency = params[:currency]

    if omise_token.present?
      @token = retrieve_token(omise_token)
    else
      @token = nil
    end

    if @token && charity && amount.present? && amount.to_i > 20 && currency
      if Rails.env.test?
        charge = OpenStruct.new(
            {
                amount: toSubUnit(amount.to_i, currency),
                paid: (amount.to_i != 999),
            })
      else
        charge = Omise::Charge.create(
            {
                amount: toSubUnit(amount.to_i, currency),
                currency: currency,
                card: omise_token,
                description: "Donation to #{charity.name} [#{charity.id}]",
            })
      end
      if charge.paid
        charity.credit_amount(charge.amount)
        flash.notice = t(".success")
        redirect_to root_path
        return
      end
    end

    flash.now.alert = t(".failure")
    render :index
    return
  end

  private

  def retrieve_token(token)
    if Rails.env.test?
      OpenStruct.new({
        id: "tokn_X",
        card: OpenStruct.new({
          name: "J DOE",
          last_digits: "4242",
          expiration_month: 10,
          expiration_year: 2020,
          security_code_check: false,
        }),
      })
    else
      Omise::Token.retrieve(token)
    end
  end
end
