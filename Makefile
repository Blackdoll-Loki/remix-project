check: 
		docker compose config
up:	check
		docker compose up -d --remove-orphans
down: 
		docker compose down
ps:
		docker compose ps -a
run:
		docker compose stop remix
		docker compose run --rm -v ./sourse:/app -p 3000:3000 remix bash || true
		docker compose start remix
