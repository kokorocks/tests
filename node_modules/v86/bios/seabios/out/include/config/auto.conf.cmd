deps_config := \
	vgasrc/Kconfig \
	/prj/src/Kconfig

include/config/auto.conf: \
	$(deps_config)


$(deps_config): ;
