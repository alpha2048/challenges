class Charity < ActiveRecord::Base
  validates :name, presence: true

  def credit_amount(amount)
    Charity.transaction do
      Charity.lock.find(id)
      update_column :total, total + amount
    end
  end
end
