set -o errexit

pip install -r requirements.txt

python manage.py collectstatic --no-input

python manage.py migrate

if [[ "$CREATE_SUPER_USER" == "true" ]]; then
    python manage.py createsuperuser --no-input
fi
