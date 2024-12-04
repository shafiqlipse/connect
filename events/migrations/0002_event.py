# Generated by Django 4.2 on 2024-02-17 08:10

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('events', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250)),
                ('event_type', models.CharField(choices=[('Press Conference', 'Press Conference'), ('Presser', 'Presser'), ('Media Engagement', 'Media Engagement')], max_length=250)),
                ('venue', models.CharField(max_length=250)),
                ('organiser', models.CharField(max_length=250)),
                ('description', tinymce.models.HTMLField()),
                ('start_date', models.DateTimeField()),
                ('end_date', models.DateTimeField()),
                ('event_photo', models.ImageField(blank=True, default='http://localhost:8000/static/images/profile.png', null=True, upload_to='photo/')),
                ('event_cover', models.ImageField(blank=True, default='http://localhost:8000/static/images/profile.png', null=True, upload_to='photo/')),
                ('poster', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]