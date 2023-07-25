FROM php:8.1-fpm

COPY composer.lock composer.json /var/www/

WORKDIR /var/www

COPY . /var/www/
RUN docker-php-ext-install pdo pdo_mysql

COPY . /var/www

EXPOSE 8000

CMD ["php-fpm"]
