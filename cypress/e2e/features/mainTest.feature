Feature: Main test suite

Background:
  Given I visit "https://www.saucedemo.com/"
  When I login with valid user and password

  Scenario: Add a product to cart from products overview
    Given I check that the element with data-test "shopping-cart-badge" should "not.exist"
    When I click on the element with data-test "add-to-cart-sauce-labs-backpack"
    And I check that the element with data-test "shopping-cart-badge" should "be.visible" 
    And I check that the element with data-test "shopping-cart-badge" contain the text "1"
    And I click on the element with data-test "shopping-cart-link"
    And I check that the url include the endpoint "cart.html"
    Then I check that the element with data-test "inventory-item-name" contain the text "Sauce Labs Backpack"


    Scenario: Verify product details
    Given I check that the element with data-test "item-1-title-link" should "exist"
    And I click on the element with data-test "item-1-title-link" should "be.visible" contain the text "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt."
    When I click on the element with data-test "back-to-products" include the endpoint "inventory.html"
    And I click on the element with data-test "shopping-cart-link" should "not.exist" the element with data-test "shopping_cart_badge"
    Then I check that the element with data-test "item-quantity" should "not.exist"

   #  Scenario: Sort product from lowest to highest price
   #  Given I click on element with data test ""
   #  When I select a element with data test " "
   #  Then I check that the first item on the list should be the element with data-test "" y contain the text "Sauce Labs Onesie"
   #  And I check that the first item on the list should be the item with data-test "" and contain the text "Sauce Labs Fleece Jacket"

     


