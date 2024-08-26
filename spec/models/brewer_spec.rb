require 'rails_helper'

RSpec.describe Brewer, :type => :model do
  subject {
    described_class.new(first_name: "Jacob", last_name: "Obermann")
  }

  describe "create" do
    it "is valid with address attributes" do
      subject.city = "Milwaukee"

      expect(subject).to be_valid
    end

    it "is not valid without a name" do
      subject.first_name = nil
      subject.last_name = nil

      expect(subject).not_to be_valid
    end

    it "is not valid without either an email or a phone" do
      subject.email = nil
      subject.phone = nil

      expect(subject).not_to be_valid
    end
  end
end