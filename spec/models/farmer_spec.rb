require 'rails_helper'

RSpec.describe Farmer, :type => :model do
  subject {
    described_class.new(first_name: "Leah", last_name: "Penniman")
  }

  describe "create" do
    it "is valid with address attributes" do
      subject.city = "Petersburgh"
      subect.state = "NY"

      expect(subject).to be_valid
    end

    it "is not valid without a name" do
      subject.name = nil

      expect(subject).not_to be_valid
    end

    it "is not valid without either an email or a phone" do
      subject.email = nil
      subject.phone = nil

      expect(subject).not_to be_valid
    end
  end
end