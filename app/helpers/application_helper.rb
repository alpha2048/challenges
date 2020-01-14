module ApplicationHelper
  def m(amount, currency)
    Money.new(amount, currency).format
  end

  def toSubUnit(amount, currency)
    Money.from_amount(amount, currency).cents
  end
end
