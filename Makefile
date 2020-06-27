.DEFAULT_GOAL :=setup

help:
	@echo ""
	@echo "Available Tasks:"
	@echo "cypress  install and prepare cypress on your machine"
	@echo	"upgrade	upgrade cypress to the latest stable version"

setup:
	brew install yarn
	yarn install
	yarn run cypress open

upgrade:
	yarn upgrade cypress --latest

