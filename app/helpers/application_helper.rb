module ApplicationHelper
  def m(amount, currency)
    Money.new(amount, currency).format
  end

  # Example
  #   subUnit = toSubUnit(100, "THB")
  #   subUnit == 10000
  def toSubUnit(amount, currency)
    Money.from_amount(amount, currency).cents
  end
end
