# Generated by Django 4.2 on 2024-02-16 11:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_userprofile_nin_userprofile_address_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='NIN',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='address',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='agree_to_terms',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='bio',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='email',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='gender',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='media_house',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='media_type',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='nid',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='office_id',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='personal_email',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='phone',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='profile_photo',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='role',
        ),
    ]