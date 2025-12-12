# No locking, but validation checks

Rather than locking, applications may check updates are consistent with
existing data. Serializing database access and updating only the fields
that change is one approach.

