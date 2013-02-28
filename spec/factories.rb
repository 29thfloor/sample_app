FactoryGirl.define do 
	factory :user do
		name 	"Daniel McFarland"
		email	"danieljmcfarland@gmail.com"
		password "foobar"
		password_confirmation "foobar"
	end
end