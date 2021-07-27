import setuptools


setuptools.setup(
    name="progrex",
    version="0.1.0",
    description="A TensorBoard plugin.",
    packages=["progrex"],
    package_data={
        "progrex": ["static/**"],
    },
    entry_points={
        "tensorboard_plugins": [
            "progrex = progrex.plugin:ProgrexPlugin",
        ],
    },
)
